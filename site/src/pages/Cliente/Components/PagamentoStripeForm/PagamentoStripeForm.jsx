import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { getIntencaoPagamentoStripe } from '../../../../services/formaPagamento';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function PagamentoForm() {
const stripe = useStripe();
const elements = useElements();
const [error, setError] = useState('');
const [pagando, setPagando] = useState(false);
const [sucesso, setSucesso] = useState(false);

const handleSubmit = async (event) => {
  event.preventDefault();
  setError('');
  setSucesso(false);

  if (!stripe || !elements) return;

  setPagando(true);

  try {
    // Chame seu backend para criar a PaymentIntent e obter o clientSecret usando o serviço axios
    const valor = 100.00; // Exemplo: R$100,00
    const data = await getIntencaoPagamentoStripe(valor);
    const clientSecret = data.clientSecret;

    // Confirme o pagamento com os dados do cartão
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });

    setPagando(false);

    if (result.error) {
      setError(result.error.message);
    } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
      setSucesso(true);
    }
  } catch (err) {
    setPagando(false);
    setError('Erro ao iniciar pagamento: ' + (err?.message || err));
  }
};

return (
  <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
    <CardElement options={{ hidePostalCode: true }} />
    <button type="submit" disabled={!stripe || pagando} style={{ marginTop: 16 }}>
      {pagando ? 'Processando...' : 'Pagar'}
    </button>
    {error && <div style={{ color: 'red', marginTop: 8 }}>{error}</div>}
    {sucesso && <div style={{ color: 'green', marginTop: 8 }}>Pagamento realizado com sucesso!</div>}
  </form>
);
}

export default function PagamentoComStripe() {
return (
  <Elements stripe={stripePromise}>
    <PagamentoForm />
  </Elements>
);
}