import { mount } from '@vue/test-utils';
import ContactPage from "@/components/common/ContactPage.vue";

// Mocking window.alert
global.alert = jest.fn();

describe('ContactPage', () => {
  it('submits form with valid input', async () => {
    const wrapper = mount(ContactPage);
    
    // Mocking user input
    wrapper.vm.name = 'John Doe';
    wrapper.vm.email = 'john@example.com';
    wrapper.vm.message = 'Test message';
    
    // Mocking form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Assertions
    expect(wrapper.vm.name).toBe('');
    expect(wrapper.vm.email).toBe('');
    expect(wrapper.vm.message).toBe('');
    expect(global.alert).toHaveBeenCalledWith('Message sent successfully!');
  });

  it('displays error alert with empty input', async () => {
    const wrapper = mount(ContactPage);
    
    // Mocking form submission with empty input
    await wrapper.find('form').trigger('submit.prevent');

    // Assertions
    expect(global.alert).toHaveBeenCalledWith('Please fill in all fields.');
  });

  it('displays error alert with invalid email', async () => {
    const wrapper = mount(ContactPage);
    
    // Mocking user input with invalid email
    wrapper.vm.name = 'John Doe';
    wrapper.vm.email = 'invalid_email';
    wrapper.vm.message = 'Test message';

    // Mocking form submission
    await wrapper.find('form').trigger('submit.prevent');

    // Assertions
    expect(global.alert).toHaveBeenCalledWith('Please enter a valid email address.');
  });
});
