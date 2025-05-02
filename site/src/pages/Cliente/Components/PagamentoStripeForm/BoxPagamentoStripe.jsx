import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getIntencaoPagamentoStripe } from '../../../../services/formaPagamento';
import { 
  PagamentoContainer,
  StyledForm,
  StyledButton,
  ErrorMsg,
  SuccessMsg
 } from './PagamentoStripeForm.styled';
import { PagamentoAutorizado } from '../../../../atoms/Cliente/atomosCliente';
import { useSetAtom } from 'jotai';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const BoxPagamentoComStripe = ({ valor }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [pagando, setPagando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const setPagamentoAutorizado = useSetAtom(PagamentoAutorizado);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSucesso(false);
  
    if (!stripe || !elements) return;
  
    setPagando(true);
  
    try {
      const data = await getIntencaoPagamentoStripe(valor);
      const clientSecret = data;
  
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      });
  
      setPagando(false);
  
      if (result.error) {
        setError(result.error.message);
        setPagamentoAutorizado(false);
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        setSucesso(true);
        setPagamentoAutorizado(true);
      }
    } catch (err) {
      setPagando(false);
      setError('Erro ao iniciar pagamento: ' + (err?.message || err));
    }
  };
  
  return (
      <PagamentoContainer>
        <StyledForm onSubmit={handleSubmit}>
          <CardElement options={{ hidePostalCode: true }} />
          <StyledButton type="submit" disabled={!stripe || pagando}>
            {pagando ? 'Processando...' : 'Pagar'}
          </StyledButton>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          {sucesso && <SuccessMsg>Pagamento realizado com sucesso!</SuccessMsg>}
        </StyledForm>
      </PagamentoContainer>
  );
  }

  const BoxPagamentoStripe = ({ valor, setPagamentoAutorizado }) => {
  return(
    <Elements stripe={stripePromise}>
      <BoxPagamentoComStripe
        valor={valor}
        setPagamentoAutorizado={setPagamentoAutorizado}
      />
    </Elements>
  );
}

export default BoxPagamentoStripe;