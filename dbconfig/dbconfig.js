import mongoose from 'mongoose';

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log('MongoDB connected')
        })

        connection.on('error', (err) => {
            console.log('MongoDB not connected' + " " + err)
            process.exit()
        })

    } catch (error) {
        console.log('something went wrong to connect DB')
        console.log(error);
    }
}