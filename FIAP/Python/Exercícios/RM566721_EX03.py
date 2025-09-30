import locale

locale.setlocale(locale.LC_ALL, 'pt_BR.UTF-8')

def formatar_para_moeda(valor):
    return locale.currency(valor, grouping=True)

valor_da_divida = float(input('Qual é o valor da sua dívida? '))
quantidade_de_parcelas = [1, 3, 6, 9, 12]
porcentagens_de_juros = [0, 5, 10, 15, 20]

for parcelas, juros in zip(quantidade_de_parcelas, porcentagens_de_juros):
    acrescimo_de_juros = (valor_da_divida * (juros / 100))
    total = valor_da_divida + acrescimo_de_juros
    parcela = total / parcelas
    print(
        f'Total: {formatar_para_moeda(total)}, '
        f'Juros ({juros}%): {formatar_para_moeda(acrescimo_de_juros)}, '
        f'Número de parcelas: {parcelas}, '
        f'Valor da parcela: {formatar_para_moeda(parcela)}'
    )

