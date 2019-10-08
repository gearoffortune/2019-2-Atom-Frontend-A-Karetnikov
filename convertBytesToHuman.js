/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  // your solution goes here

  const powers = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  if(!(Number.isInteger(bytes)&&(bytes > 0))){
    return false;
  }

  let bytesBuffer = bytes;
  let bytesPower = 0;
  bytesBuffer = Math.floor(bytesBuffer/(2**10 - 1));
  while(bytesBuffer !== 0){
    bytesBuffer = Math.floor(bytesBuffer/(2**10 - 1));
    bytesPower += 10;
  }

  return Math.round(bytes/(2**bytesPower)*100)/100 + ' ' + powers[bytesPower/10];
}