export const authConfig = {
    pages
    callbacks: {
        authorized({ auth, request }){
            return false
        }
    }
}