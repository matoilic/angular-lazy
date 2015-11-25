class SystemService {
    import(path) {
        return System.
            import(path)
            .catch(function(err) {
                console.error(err.stack);
            });
    }
}

export default [SystemService];
