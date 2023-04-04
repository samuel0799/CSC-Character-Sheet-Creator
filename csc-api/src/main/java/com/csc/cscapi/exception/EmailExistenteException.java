package com.csc.cscapi.exception;

public class EmailExistenteException extends RuntimeException{
    
    public EmailExistenteException(String mensagem) {
        super(mensagem);
    }
 
    public EmailExistenteException(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }
 
}
