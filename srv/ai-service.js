
module.exports = cds.service.impl(async function (srv) {
    srv.on('POST', 'Predict', async (req) => {
        
        return req.data;
    });
});
