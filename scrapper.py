from selenium import webdriver

categorias = [
    'https://www.tudogostoso.com.br/categorias/1000-bolos-e-tortas-doces',
    'https://www.tudogostoso.com.br/categorias/1004-carnes',
    'https://www.tudogostoso.com.br/categorias/1009-aves',
    'https://www.tudogostoso.com.br/categorias/1014-peixes-e-frutos-do-mar',
    'https://www.tudogostoso.com.br/categorias/1023-saladas-molhos-e-acompanhamentos',
    'https://www.tudogostoso.com.br/categorias/1027-sopas',
    'https://www.tudogostoso.com.br/categorias/1028-massas',
    'https://www.tudogostoso.com.br/categorias/1032-bebidas',
    'https://www.tudogostoso.com.br/categorias/1037-doces-e-sobremesas',
    'https://www.tudogostoso.com.br/categorias/1044-lanches',
    'https://www.tudogostoso.com.br/categorias/1057-prato-unico',
    'https://www.tudogostoso.com.br/categorias/1329-light',
    'https://www.tudogostoso.com.br/categorias/1334-alimentacao-saudavel',
]

# def dadosReceita(link):
#     browser = webdriver.Chrome()
    
#     browser.get(link)

#     titulo = browser.find_element_by_class_name('recipe-title').find_element_by_tag_name('h1').get_attribute('innerText')
#     nota = browser.find_element_by_class_name('show-rating-modal').find_element_by_xpath('dic//div//div//span[1]').get_attribute('innerText')
#     # tempoPreparo = browser.find_element_by_class_name('recipe-title').text
#     # rendimento = browser.find_element_by_class_name('recipe-title').text
#     # ingredientes = browser.find_element_by_class_name('ingredients-card').text
#     # modoPreparo = browser.find_element_by_class_name('directions-card').text
#     # categorias = browser.find_element_by_class_name('recipe-categories-card card').text

#     print(titulo)

arquivo = open('links.txt', 'w')
browser = webdriver.Chrome()

for categoria  in categorias:
    browser.get(categoria)

    paginas = browser.find_element_by_class_name('pagination').find_element_by_xpath('*')
    quantidadeLinks = paginas.get_attribute('innerHTML').count('a href')

    quantidadePaginas = paginas.find_element_by_xpath('//a[' + str(quantidadeLinks) + ']').get_attribute('href').split('page=')[1]
    arquivo.write(categoria + '\n')
    arquivo.write(quantidadePaginas + '\n')

    for i in range(1, int(quantidadePaginas)):
        browser.get(categoria + '?page=' + str(i))
        receitas = browser.find_element_by_class_name('col-lg-5').find_element_by_class_name('rounded').find_elements_by_class_name('recipe-card-with-hover  ')

        for receita in receitas:
            arquivo.write(receita.find_element_by_tag_name('a').get_attribute('href') + '\n')

browser.quit()
arquivo.close()

# dadosReceita('https://www.tudogostoso.com.br/receita/109535-bolo-de-maca-de-liquidificador-o-melhor-do-mundo.html')