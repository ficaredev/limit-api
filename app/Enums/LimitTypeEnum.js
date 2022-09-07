import Enum from '#app/Enums/Enum'

const LimitTypeEnum = Enum({
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
  TRANSFER: 'transfer',
  EXCHANGE: 'exchange',
})

export default LimitTypeEnum
