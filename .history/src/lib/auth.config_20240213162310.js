export const authConfig = {
    pages: {
        sig
    }
    callbacks: {
        authorized({ auth, request }){
            return false
        }
    }
}