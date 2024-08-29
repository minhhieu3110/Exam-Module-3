export const formatCurrency =(value)=>{
    return Number(value).toLocaleString('vi',{
        style: 'currency',
        currency:'vnd'
    })
}