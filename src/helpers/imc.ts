export type LevelsProps = {
    id: number;
    title: string;
    subtitle: string;
    imc: number[];
    icon: string;
    bgcolor: string;
    description: string;
    youImc?: number
  }

export const levels: LevelsProps[] = [
    {
        id: 1,
        title: "Magreza",
        subtitle: "Menor que 18,5",
        imc: [1, 18.5],
        icon: "magreza.png",
        bgcolor: "#A6A6A6",
        description: "Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso."
    },
    {
        id: 2,
        title: "Normal",
        subtitle: "Entre 18.5 e 24.9",
        imc: [18.5, 24.9],
        icon: "normal.png",
        bgcolor: "#19AF00",
        description: "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada."
    },
    {
        id: 3,
        title: "Sobrepeso",
        subtitle: "Entre 25,0 e 29,9",
        imc: [25, 29.9],
        icon: "sobrepeso.png",
        bgcolor: "#DCB900",
        description: "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer."
    },
    {
        id: 4,
        title: "Obesidade I",
        subtitle: "Entre 30,0 e 34,9",
        imc: [30, 34.9],
        icon: "obesidade-i.png",
        bgcolor: "#FF7A00",
        description: "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista."
    },
    {
        id: 5,
        title: "Obesidade II",
        subtitle: "Entre 35,0 e 39,9",
        imc: [35, 39.9],
        icon: "obesidade-ii.png",
        bgcolor: "#FF1F1F",
        description: "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde."
    },
    {
        id: 6,
        title: "Obesidade III",
        subtitle: "Acima de 40,0",
        imc: [40, 99],
        icon: "obesidade-iii.png",
        bgcolor: "#620000",
        description: "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente."
    }

  ]

  export function calulateImc(altura: number, peso: number){ 
    const imc = peso / (altura * altura)
  
    for(let i in levels){
      if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
        let levelCopy: LevelsProps = {...levels[i]}
  
        levelCopy.youImc = parseFloat(imc.toFixed(2))
        return {levelCopy}
      }
    }
    
    return {'error': 'Não foi possível calcular o IMC.'} 
  }