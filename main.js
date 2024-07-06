function solution(number){
    let answer = []
    while(number){
      if (number >= 1000)
        {
          answer.push('M')
          number-= 1000
        }
      else if (number >= 900)
        {
          answer.push('CM')
          number -= 900
        }
      else if (number >= 500)
        {
          answer.push('D')
          number -= 500
        }
      else if (number >= 400)
        {
          answer.push('CD')
          number -= 400
        }
      else if (number >= 100)
        {
          answer.push('C')
          number -= 100
        }
      else if (number >= 90)
        {
          answer.push('XC')
          number -= 90
        }
      else if (number >= 50)
        {
          answer.push('L')
          number -= 50
        }
      else if (number >= 40)
        {
          answer.push('XL')
          number -= 40
        }
      else if (number >= 10)
        {
          answer.push('X')
          number -= 10
        }
      else if (number >= 9)
        {
          answer.push('IX')
          number -= 9
        }
      else if (number >= 5)
        {
          answer.push('V')
          number -= 5
        }
      else if (number >= 4)
        {
          answer.push('IV')
          number -= 4
        }
      else{
        answer.push('I')
        number -= 1
      }
    }
    return answer.join('')
  }