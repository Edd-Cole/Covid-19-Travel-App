export const customErrors = (err: any, req: any, res: any, next: any) => {
    console.log(err)
    if(err.code === 400) {
        res.status(err.code).send(err)
    }
    next(err)
}