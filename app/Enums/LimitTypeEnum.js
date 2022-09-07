import Enum from '#app/Enums/Enum'

const LimitTypeEnum = Enum({
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  TRANSFER: 'transfer',
  CONVERT: 'convert',
})

export default LimitTypeEnum
