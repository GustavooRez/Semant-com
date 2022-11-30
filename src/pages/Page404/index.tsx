import Button from 'react-bootstrap/Button'

const Pagina404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Página não encontrada.</p>
            <p className="lead">
              Essa página que você está procurando não existe
            </p>
              <Button
                href="/"
                variant="danger"
              >
                Voltar
              </Button>
        </div>
    </div>
  );
};

export default Pagina404;
