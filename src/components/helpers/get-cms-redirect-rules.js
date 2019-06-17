import { DynamicRedirect } from 'react-router-async';

const redirectRulesFindVarsRegex = /{(.*?)}/gi;

export default (redirectRulesFromCMS, getState) => {
    if(!Array.isArray(redirectRulesFromCMS) || !redirectRulesFromCMS.length) {
        return;
    }

    return redirectRulesFromCMS.map((rule) => ({
        path  : rule.source,
        action: (next, options) => {
            let destinationUrl = rule.destination;

            if(destinationUrl) {
                const routerLocation = getState().router ? getState().router.location : {};
                const namedParams = {
                    ...routerLocation.query,
                    ...options.params
                }; // Получаем имена всех переменных, заданных в админке в запрашиваемом урле (в именованных параметрах и в query string), для последующей подстановки их значений в редиректный урл
                const emptyQueryKeys = []; // переменные (ключи query string), которые присутствуют в урле редиректа, но не инициализированы в запрашиваемом урле

                // заменяем переменные на их значения
                destinationUrl = destinationUrl.replace(redirectRulesFindVarsRegex, (match, variable) => {
                    const variableValue = namedParams[variable];

                    if(variableValue) {
                        return variableValue.toLowerCase()
                    } else {
                        emptyQueryKeys.push(match);

                        return match
                    }
                });

                let [path, queryString] = destinationUrl.split('?');

                if(Object.keys(routerLocation.query).length && rule.saveOriginalQueryString) { // если в админке задано правило сохранять оригинальные query string, то переносим их
                    destinationUrl = `${path}${routerLocation.search}`;
                } else if(emptyQueryKeys.length) { // если какие-то переменные не были инициализированы, то убираем их из урла
                    const deleteEmptyQuery = (pair) => {
                        emptyQueryKeys.forEach((key) => {
                            if(pair.includes(key)) {
                                try {
                                    const regex = new RegExp(`&${pair}|${pair}`, 'ig');

                                    queryString = queryString.replace(regex, '')
                                } catch(error) {
                                    console.error(error)
                                }
                            }
                        })
                    };

                    queryString.split('&').forEach(deleteEmptyQuery);

                    if(queryString) {
                        destinationUrl = `${path}?${queryString}`;
                    } else {
                        destinationUrl = path;
                    }
                }

                return new DynamicRedirect(destinationUrl, 301);
            }

            return next(options)
        }
    }));
}
