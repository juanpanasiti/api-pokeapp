import pkg from '../../package.json'

export const testConnection = (req,res) => {
    try {
        res.status(200).json({
            test: "OK!",
            name: pkg.name,
            author: pkg.author,
            description: pkg.description,
            version: pkg.version,
            lang: req.query.language
        })
    } catch (error) {
        res.status(400).json({
            test: "FAIL!",
            error: error
        })
    }
}//testConnection()