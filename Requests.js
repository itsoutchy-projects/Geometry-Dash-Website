module.exports = class Requests {
    /**
     * Sends a request via `method` to `url`
     * @param {string} url The URL
     * @param {Array<Header>} headers The headers
     */
    send(method, url, headers) {
        let xhr = new XMLHttpRequest();
        headers.forEach(function(value) {
            xhr.setRequestHeader(value.name, value.value);
        });
        xhr.open(method, url);
        return xhr.responseText;
    }
}

class Header {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}