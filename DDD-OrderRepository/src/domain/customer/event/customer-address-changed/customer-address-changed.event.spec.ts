import EventDispatcher from "../../../@shared/event/event-dispatcher";
import Customer from "../../entity/customer";
import Address from "../../value-object/address";
import CustomerAddressChangedEvent from "./customer-address-changed.event";
import SendConsoleWhenCustomerAddressIsChangedHandler from "../customer-address-changed/handler/send-console-when-customer-address-is-changed.handler";

describe("Customer Address Domain Events", () => {
  it("should notify event handlers when customer address is changed", () => {
    const customer = new Customer('001', 'Rodrigo Vieira')
    const customerAddress = new Address('Rua Drongo', 123, '86055-778', 'Londrina')
  
    customer.changeAddress(customerAddress)
  
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleWhenCustomerAddressIsChangedHandler();
  
    const spyEventHandler = jest.spyOn(eventHandler, "handle");
  
    eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);
  
    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(eventHandler);
  
    const customerAddressChangedEvent = new CustomerAddressChangedEvent(customer);
  
    eventDispatcher.notify(customerAddressChangedEvent);
  
    expect(spyEventHandler).toHaveBeenCalled();
  });
});



