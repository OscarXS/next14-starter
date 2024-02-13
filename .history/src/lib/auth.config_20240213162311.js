export const authConfig = {
    pages: {
        signIn
    }
    callbacks: {
        authorized({ auth, request }){
            return false
        }
    }
}