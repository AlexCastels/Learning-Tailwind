# Learning-Tailwind

È un framework di css che semplifica il suo utilizzo oltre che apportare nuove funzionalità

## CLASS

Le proprietà css adesso possono essere inserite direttamente come classe diretta dell'elemento che vogliamo personalizzare

Tailwind mette già a disposizione molte classi, alcune di queste classi sono in realtà un aggregazione di più proprietà css

`<h1 class="text-3xl font-bold underline">Hello World</h1>`

## CLASS PERSONALIZZATE

È possibile anche personalizzare delle classi e non utilizzare solamente quelle di default

O modificare i valori di quelle già esistenti

```
//PERSONALIZZARE CLASSI
tailwind.config = {
    theme : {
        extends : {
            colors : {
                'green' : '#13ce66'
            } ,
            fontFamily : {
                sans : ['Graphik' , 'sans-serif'],
            } ,
            spacing : {
                'xl' : '1rem'
            } ,
            borderdRadius : {
                'md' : '5px'
            }
        }
    }
}

<h1 class="text-green text-xl">Hello World</h1>

```

## SOME TEXT PROPERTIES

color = text + color `<p class="text-red">Hello World</p>`

font-family = font + name `<p class="font-mono">Hello World</p>`

font-size = text + size `<p class="text-xl">Hello World</p>`

font-weight = font + size `<p class="font-medium">Hello World</p>`

letter-spacing = tracking + size `<p class="tracking-wide">Hello World</p>`

## SOME BORDER PROPERTIES

background-color = bg + color `<div class="bg-black"></div>`

border-radius = rounded + size `<div class="rounded-sm"></div>`

border-collapse = border + numero `<div class="border-4"></div>` Aggiunge uno spessore al bordo

border color = border + numero + colore `<div class="border-4-red"></div>`

border style = border + stile `<div class="border-dashed"></div>`

## WIDTH PROPERTIES

width = w + grandezza `<div class="w-4"></div>` `<div class="w-1/2"></div>`

max-width = max-w + grandezza `<div class="max-w-xl"></div>`

## HEIGHT PROPERTIES

height = h + grandezza `<div class="h-screen"></div>`

## DARK MODE

È possibile definire una classe darkMode disposta da Tailwind che gestirà in automatico la conversione delle classi
quando questa classe 'dark' viene aggiunta al contenitore

Così facendo sarà possibile definire delle classi richiamate prima con il `dark:` 
che verranno attivate solamente in presenza di `class = "dark"`

Utilizzando delle funzioni dinamiche tramite JS sarà possibile implementare una darkmode

```
tailwind.config = {
    darkMode: "class"
}

<div class="dark">
    <div class="bg-white dark:bg-black dark:text-white"></div>
</div>
```

## SELETTORI

Come in css possiamo utilizzare selettori, in maniera più semplificata

All'interno di un container basterà solamente indicare `first:classe` o `last:classe` per puntare direttamente al child

Oppure `odd:classe` ed `even:classe` per puntare ai child pari o dispari 

```
<ul class="flex flex-col item-center justify-around first:pt-0 last:pb-0">
    <li class="text-sky-500">First</li>
    <li class="text-sky-500">Second</li>
    <li class="text-sky-500">Third</li>
</ul>
```

## PSEUDO CLASS

Per utilizzare le pseudo classi basterà solamente aggiungere la pseudo classe con :

hover = `<div class="bg-blue hover:bg-bg-opacity-70"></div>`

active = `<div class="bg-black active:bg-white"></div>`

focus = `<div class="bg-black focus:ring-grey-300"></div>`

### GROUP

Tailwind mette a disposizione un utility per gestire il comportamento delle pseudoclassi

È possibile utilizzare la classe `group` per gestire più pseudoclassi in un contenitore

Ad esempio:

```
<div class="group p-4 border rounded-lg hover:bg-gray-100">
  <h2 class="text-lg font-bold group-hover:text-blue-500">Titolo della card</h2>
  <p class="text-gray-500 group-hover:text-gray-700">
    Questo testo cambia colore quando passi il mouse sulla card.
  </p>
</div>
```

In questo caso il div padre contiene la classe `group`

I child contengono la pseudo classe con il group, `group-hover:classe`

Il tutto viene attivato quando il padre è in stato di hover, questo per sincronizzare i cambiamenti

## PADDING - MARGIN - BOX MODEL

padding = p + grandezza `<div class="p-4"></div>`

padding-top = pt + grandezza `<div class="pt-4"></div>`

padding-bottom = pb + grandezza `<div class="pb-4"></div>`

padding-left = pl + grandezza `<div class="pl-4"></div>`

padding-right = pr + grandezza `<div class="pr-4"></div>`

padding orizzontale (asse x) : padding-left + padding-right = px + grandezza `<div class="px-4"></div>`

padding verticale (asse y) : padding-top + padding-bottom = py + grandezza `<div class="py-4"></div>`

- Per il margin sono le stesse classi ma utilizzando `m`

margin = m + grandezza `<div class="m-4"></div>`

## FLEX

display: flex = flex `<div class="flex"></div>`

justify-content = justify + proprietà `<div class="flex justify-between"></div>`

align-items = items + proprietà `<div class="flex item-center"></div>`

flex-direction : column = flex - col `<div class="flex item-center flex-col"></div>`

flex-direction : row = flex - row `<div class="flex item-center flex-row"></div>`

flex-wrap : wrap = flex - wrap `<div class="flex item-center flex-wrap"></div>`

order = order + num `<div class="order-2"></div>`

## MEDIA QUERY

```
sm	640px	@media (min-width: 640px) { ... }
md	768px	@media (min-width: 768px) { ... }
lg	1024px	@media (min-width: 1024px) { ... }
xl	1280px	@media (min-width: 1280px) { ... }
2xl	1536px	@media (min-width: 1536px) { ... }
```

Per poter utilizzare le media query basterà solamente inserire la proprietà con : e inserire la classe

Nel caso di più classi da attivare bisognerà specificare ogni volta la media query desiderata

`<div class="bg-red sm:bg-black sm:text-orange"></div>`

## DIRETTIVE

È la possibilità di poter creare delle classi personalizzate da poter implementare negli elementi

Devono essere specificate nel main.css e ce ne sono di 3 tipi

- @layer base = permette di applicare proprietà generiche direttamente agli elementi HTML 
- @layer components = permette di creare "componenti" cioè classi personalizzate da utilizzare negli elementi HTML
- @layer utilities = creiamo classi CSS personalizzate (unica direttiva che non necessita @apply)


- @apply = permette di poter applicare classi TW inline nei @layer

Così facendo possiamo creare degli stili generici da utilizzare ovunque nel progetto

Esempio: 

```
@layer base {
    h1 {
        @apply text-2xl;
    }
    h2 {
        @apply text-xl;
    }
}

@layer components {
    .btn-primary {
        @apply py-2 px-4 bg-blue-500 text-white font-semibold ecc..ecc..
    }
}

<h1>Hello World</h1>
<button class="btn-primary">First btn</button>
<button class="btn-primary">Second btn</button>
```

