*JSX* => JavaScript XML
*Propriedades* => Similar aos atributos do HTML. `Porem são atributos passados ao componentes do React
> children ( mostra tudo o que está dentro do componente).
*Props example*
```
function Header(props) {
  return (
    <header>
      <h1> {props.title} </h1>
    </header>
  );
}
```
or
```
import React from "react";

function Header({ title }) {
  return (
    <header>
      <h1> {title} </h1>
    </header>
  );
}

export default Header;
```

*Estado* => Informação que vai ser mantida pelo componente.
*Imutabilidade* => Por questão de performase não podemos alterar a variavel diretamente/ sobrepor o estado da variavel.

