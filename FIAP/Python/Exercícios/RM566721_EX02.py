preco_do_carro = float(input('Qual é o preço do carro que você gostaria de comprar? '))
quantidade_de_parcelas = [6, 12, 18, 24, 30, 36, 42, 48, 54 ,60]

print(f'O preço final à vista com desconto de 20% é de R$ {preco_do_carro * 0.8:.2f}.')

for item in quantidade_de_parcelas:
    total = preco_do_carro + (preco_do_carro * ((item / 2) / 100))
    acrescimo = int(item / 2)
    parcela = total / item
    print(f'O preço final, com acréscimo de {acrescimo}%, parcelado em {item} vezes é de R$ {total:.2f} com parcelas de R$ {parcela:.2f}.')