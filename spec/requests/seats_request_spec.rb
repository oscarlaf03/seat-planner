require 'rails_helper'




RSpec.describe "Seats", type: :request do

    before do 
        post '/v1/seats', params: {seats:'invalid'}
    end

    it 'it returns back my param' do
        answer = ["\"Invalid ata: \\\" my_test_value\\\" does not follow the data object format\""]
        expect(JSON.parse(response.body)['seats'][0]).to be(nil)
    end

end
