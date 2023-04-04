package com.csc.cscapi.exception;

public class EntidadeNaoEncontradaException extends RuntimeException {
 
    public EntidadeNaoEncontradaException(String mensagem) {
        super(mensagem);
    }
 
    public EntidadeNaoEncontradaException(String mensagem, Throwable causa) {
        super(mensagem, causa);
    }
 
}
