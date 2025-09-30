tentativas = 0
tipo_de_investimento = 0

print('Olá! Bem vindo ao sistema de resgate de aplicações financeiras!')

while tipo_de_investimento <= 0 or tipo_de_investimento > 3:
    if tentativas > 0:
        print('Opção inválida.')
    tipo_de_investimento = int(input(
        'Por favor, escolha qual o tipo de investimento que será resgatado: \n'
          'Digite 1 para CDB \n'
          'Digite 2 para LCI \n'
          'Digite 3 para LCA \n'
    ))
    tentativas += 1

valor_do_resgate = float(input('Qual o valor do resgate? ').replace(',', '.'))
tempo_de_investimento = int(input('Por quantos dias o valor ficou investido? '))

if tipo_de_investimento == 2 or tipo_de_investimento == 3:
  print(f'O valor final do seu resgate é R$ {valor_do_resgate:.2f}. Esse investimento é isento de IR.')
elif tipo_de_investimento == 1 and tempo_de_investimento <= 180:
    imposto = valor_do_resgate * 0.225
    print(f'Para este prazo, a porcentagem de IR é de 22.5% sobre o lucro. O valor do imposto a ser pago é R$ {imposto:.2f}.')
elif tipo_de_investimento == 1 and (180 < tempo_de_investimento <= 360):
    imposto = valor_do_resgate * 0.20
    print(f'Para este prazo, a porcentagem de IR é de 20% sobre o lucro. O valor do imposto a ser pago é R$ {imposto:.2f}.')
elif tipo_de_investimento == 1 and (360 < tempo_de_investimento <= 720):
    imposto = valor_do_resgate * 0.175
    print(f'Para este prazo, a porcentagem de IR é de 17.5% sobre o lucro. O valor do imposto a ser pago é R$ {imposto:.2f}.')
elif tipo_de_investimento == 1 and tempo_de_investimento > 720:
    imposto = valor_do_resgate * 0.15
    print(f'Para este prazo, a porcentagem de IR é de 15% sobre o lucro. O valor do imposto a ser pago é R$ {imposto:.2f}.')