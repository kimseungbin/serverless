const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, X-Api-Key, Authorization',
    'Access-Control-Allow-Credentials': 'true'
}

export const formatHandlerResponse = async (statusCode, payload) => {
    return {
        statusCode,
        body: JSON.stringify(payload),
        headers
    }
}