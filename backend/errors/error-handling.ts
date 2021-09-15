export const dbErrors = (err: object, req: any, res: any, next: any) => {
    console.log(err)
    next(err)
}