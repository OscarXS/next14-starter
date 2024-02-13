export const authConfig = {
    callbacks: {
        authorized({ auth, request }){
            return false
        }
    }
}