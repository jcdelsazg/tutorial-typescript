interface State {
  order: Order;

  cancelOrder();
  verifyPayments();
  shipOrder();
}

class Order {
  public currentState: State;

  public cancelledOrderState: State;
  public paymentPendingState: State;
  public orderShippedState: State;
  public orderBeingProcesedState: State;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.orderBeingProcesedState = new OrderBeingPreparedState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.paymentPendingState = new PaymentPendingState(this);

    this.setState(this.paymentPendingState);
  }
  public setState(state: State) {
    this.currentState = state;
  }
  public getState(): State {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  public order: Order;
  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log('Cancelling the unpaid order...');
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayments() {
    console.log('The payment is verified: Shipper soon...');
    this.order.setState(this.order.orderBeingProcesedState);
  }
  shipOrder() {
    console.log('Cannot ship the order when payment is pending...');
  }
}

class CancelledOrderState implements State {
  public order: Order;
  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log('Your order has already cancelled...');
  }
  verifyPayments() {
    console.log(
      'Your order has already cancelled, you can not verify the payment...'
    );
  }
  shipOrder() {
    console.log('Your order has already cancelled, order can not shipped...');
  }
}

class OrderBeingPreparedState implements State {
  public order: Order;
  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log('Cancelling the unpaid order...');
    this.order.setState(this.order.cancelledOrderState);
  }
  verifyPayments() {
    console.log('Already verified your payment...');
  }
  shipOrder() {
    console.log('Shipping your order now...');
    this.order.setState(this.order.orderShippedState);
  }
}

class OrderShippedState implements State {
  public order: Order;
  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log('You cannot cancel already ship...');
  }
  verifyPayments() {
    console.log('You cannot verify already ship...');
  }
  shipOrder() {
    console.log('Order already shipped...');
  }
}

let order = new Order();

console.log('The order state:' + (<any>order.getState()).constructor.name);

//It's not possible so the name is the same and the message error it's displayed
order.getState().shipOrder();

console.log('The order state:' + (<any>order.getState()).constructor.name);

order.getState().verifyPayments();

console.log('The order state:' + (<any>order.getState()).constructor.name);

//Now it's possible to ship order because the status change before
order.getState().shipOrder();

console.log('The order state:' + (<any>order.getState()).constructor.name);

//It's not possible to cancel de the order at this point because it's being shipped
order.getState().cancelOrder();

console.log('The order state:' + (<any>order.getState()).constructor.name);
