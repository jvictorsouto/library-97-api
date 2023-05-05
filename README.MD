| method | endpoint  | body | response | action |
| --- | --- | --- | --- | --- |
| POST | /books | { book }  | { book } | cria uim livro no banco de dados |
| GET  | /books | -/- | [{ book }] | lista de livros |
| GET  | /books/:bookID | -/- | { book } | devolve um livro |
| PUT | /books/:bookID | { book }  | { book } | atualizar um livro no banco de dados |
| DELETE | /books/:bookID | -/- | mesage | remove um livro do banco de dados |
