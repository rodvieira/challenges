import EventDispatcher from "../../@shared/event/event-dispatcher";
import Customer from "../entity/customer";
import CustomerCreatedEvent from "./customer-created.event";
import SendConsoleWhenCustomerIsCreatedHandler from "./handler/send-console-when-customer-is-created.handler";
import SendSecondConsoleWhenCustomerIsCreatedHandler from "./handler/send-second-console-when-customer-is-created.handler";

describe("Customer domain events", () => {
  it("should notify event handlers when customer is created", () => {
    const customer = new Customer('001', 'Rodrigo Vieira')

    const eventDispatcher = new EventDispatcher();
    const firstCustomerEventHandler = new SendConsoleWhenCustomerIsCreatedHandler();
    const secondCustomerEventHandler = new SendSecondConsoleWhenCustomerIsCreatedHandler();

    const spyFirstCustomerEventHandler = jest.spyOn(firstCustomerEventHandler, "handle");
    const spySecondCustomerEventHandler = jest.spyOn(secondCustomerEventHandler, "handle");

    eventDispatcher.register("CustomerCreatedEvent", firstCustomerEventHandler);
    eventDispatcher.register("CustomerCreatedEvent", secondCustomerEventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(firstCustomerEventHandler);

    const productCreatedEvent = new CustomerCreatedEvent(customer);

    eventDispatcher.notify(productCreatedEvent);

    expect(spyFirstCustomerEventHandler).toHaveBeenCalled();
    expect(spySecondCustomerEventHandler).toHaveBeenCalled();
  });
});
