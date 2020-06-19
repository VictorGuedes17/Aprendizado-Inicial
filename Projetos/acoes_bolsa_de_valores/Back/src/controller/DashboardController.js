module.exports = {

    async teste(req,res) {
        return res.send({ Sessao: 'ok', user: req.userId });
    }
}