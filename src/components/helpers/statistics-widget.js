import config from 'config';

const h2hUrl = (event, widget) => {
    if(!(widget && event.extId && config.widgets)) {
        return '';
    }

    let host = '';

    if(widget.H2H) {
        host = config.widgets.statistic;
    }

    if(widget.H2HCyber) {
        host = config.widgets.statisticCybersport;
    }

    if(!host) {
        return '';
    }

    return `${host}ru/match/${event.extId}`;
};

export default (event, widget) => {
    if(!widget && !event && (!widget.H2H || !widget.H2HCyber) || !h2hUrl(event, widget)) {
        return null;
    }

    const width = 860;
    const top = window.screenTop + 200;
    const left = window.screenLeft + (window.innerWidth / 2) - (width / 2);

    window.open(
        h2hUrl(event, widget),
        undefined,
        `width=${width}, height=430, left=${left}, top=${top} menubar=0, toolbar=0, location=0, status=0, resizable=1, scrollbars=1`
    );
}
