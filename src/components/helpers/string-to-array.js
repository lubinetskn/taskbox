export default (string, int = true) => {
    if(string) {
        const array = string.split(',');

        if(int) {
            return array.map((item) => parseInt(item, 10));
        } else {
            return array;
        }
    }

    return [];
};
