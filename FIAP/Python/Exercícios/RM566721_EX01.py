from collections import Counter

numero_de_colaboradores = 10
dias_da_semana = ['segunda', 'terça', 'quarta', 'quinta', 'sexta']
dias_informados = []

while numero_de_colaboradores > 0:
    dia_escolhido = input('Informe o dia da semana da sua preferência: (segunda, terça, quarta, quinta, sexta): ')
    if dia_escolhido.lower() in dias_da_semana:
        dias_informados.append(dia_escolhido.lower())
        numero_de_colaboradores -= 1
    else:
        print('O dia digitado não existe ou foi digitado incorretamente. Por favor, tente novamente.')

contagem = Counter(dias_informados)
max_votos = max(contagem.values())
dias_vencedores = [dia for dia, votos in contagem.items() if votos == max_votos]

if len(dias_vencedores) == 1:
    print(f"O dia escolhido pelos colaboradores foi {dias_vencedores[0]}-feira com {max_votos} votos.")
else:
    dias_texto = ', '.join([f"{dia}-feira" for dia in dias_vencedores])
    print(f"Houve empate! Os dias mais escolhidos foram: {dias_texto}, com {max_votos} voto(s) cada.")
