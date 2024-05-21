
module.exports = cds.service.impl(async function (srv) {
    srv.on('POST', 'Predict', async (req) => {

        try {
            let payload = {
                "Error Description": req.data.description
            };
            const predictApi = await cds.connect.to('Predict_API');

            const predictResponse = await predictApi.send({
                method: 'POST',
                path: `/predict`,
                data: payload,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            
            return {
                description: JSON.stringify(predictResponse)
            };
        } catch (error) {
            console.error(error.message);
            req.error(500, error.message);
        }
    });
});
