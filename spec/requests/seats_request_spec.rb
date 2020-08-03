require 'rails_helper'
require_relative 'example_data'

RSpec.describe "Seats", type: :request do

    before do
        post '/v1/seats', params: {seats:'invalid data'}
    end

    it 'Seats is nil with invalid data' do
        puts 'putting example data'
        puts EXAMPLE_DATA
        data = JSON.parse(JSON.parse(response.body)['seats'][0])['seats']
        expect(data).to be(nil)
    end

    it 'Errors is filled with invalid data' do
        errors = JSON.parse(JSON.parse(response.body)['seats'][0])['errors']
        expect(errors).to be_truthy
    end

end
