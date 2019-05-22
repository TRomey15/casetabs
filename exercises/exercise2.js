class Sample {
    static new(obj) {
        if (obj !== Object(obj) || typeof obj === 'function') {
            return new Sample();
        }

        for (let key of Object.keys(obj)) {
            this.prototype[key] = function() {
                return obj[key];
            }
        }

        return new Sample();
    }
}