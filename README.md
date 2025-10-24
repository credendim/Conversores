# Conversores
Projeto em Javascript a seguir visa demonstrar minha capacidade de implementação, criatividade e solução de problemas. Durante a confecção do projeto não ultilizarei nenhuma IA, somente meu conhecimento e a documentação do próprio Javascript. 

### Habilidades testada no projeto:
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

<details>
<summary><strong>Clique aqui para ver como funciona a conversão</strong></summary>

A conversão é realizada por meio de divisões sucessivas, dividindo pela base do sistema que se deseja converter, e ultilizando a sobras das divisões para montar o número conforme o seu correspondente. 

Pegando como exemplo o numero 42, e vamos converter para binário(2)

A base para qual vamos dividir o 42 é 2, pois o sistema bínario possue 2 dígitos (0 e 1), sendo assim a nossa base. Se quiséssemos converter para octal, dividiríamos por 8;
para hexadecimal, dividiríamos por 16 — pois esses sistemas possuem 8 e 16 dígitos, respectivamente.

### Vamos iniciar as divisões sucessivas:

|  Divisão |  Resultado | Resto |
|----------|------------|-------|
| 42 ÷ 2   | 21         | 0     |
| 21 ÷ 2   | 10         | 1     |
| 10 ÷ 2   | 5          | 0     |
| 5 ÷ 2    | 2          | 1     |
| 2 ÷ 2    | 1          | 0     |

Agora que o resultado da ultima divisão é igual a 1 vamos montar o nosso número seguindo essa sequência a seguir: 

- Pegamos a sobra da primeira divisão, esse será o nosso último dígito:
  ```
  0
  ```

- Pegamos a sobra da próxima divisão, vamos colocar esse dígito na frente do número que está sendo criado:
  ```
  10
  ```

- E assim por diante, até chegarmos na ultima divisão, porém após adicionar a sobra da última divisão também vamos adicionar o resultado. Sendo igual à:
  ```
  101010
  ```

</details>
    
## Decimal para Binario
O código recebe a entrada, que é amarzenada na variavel num
