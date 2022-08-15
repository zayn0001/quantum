

def sendf():
    from twilio.rest import Client 
    
    account_sid = 'ACbc71c51358e699c3f6e1baaa8d9bfbab' 
    auth_token = '73b4c0206c863e6f7abbd9b1b10118fe' 
    client = Client(account_sid, auth_token) 
    
    message = client.messages.create(  
                                messaging_service_sid='MG65b238e57f17a7f041bb101176381cbb', 
                                body='MR.JACKSON DAVIS , WE HAVE RECEIVED YOUR REQUEST FOR WASTE DISPOSAL ON 27th.'     , 
                                to='+919643261628' 
                            ) 
    
    print(message.sid)

sendf()