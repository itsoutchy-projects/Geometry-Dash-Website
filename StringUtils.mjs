/**
 * Useful utilities for `string` variables
 */
export default class StringUtils {
    /**
     * Splits `string` by every second `seperator`
     * @param {string} string The string to split
     * @param {string} seperator The seperator
     */
    SplitNum(string, seperator) {
        let words = string.split(seperator);
        /**
         * @type {Array<String>}
         */
        let result = [];
        for (let id = 0; id < words.length; id=id+2) {
            const element = words[id] + seperator + words[id+1];
            result.push(element);
        }
        return result;
    }
}