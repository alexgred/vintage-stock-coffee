/**
 * Interface order data from request.
 * @interface
 */
interface OrderData {
  orders: Order[];
}

/**
 * Interface for order item.
 * @interface
 */
interface Order {
  id: number;
  name: string;
  user: string;
  price: number;
  timestamp: number;
  minutes: number;
  done: boolean;
}

/**
 * Interface for company item props.
 * @interface
 */
interface OrderItemProps {
  name: string;
  user: string;
  price: number;
  event: () => void;
  buttonText?: string;
}
