package com.csc.cscapi.exceptionHandler;


import java.util.ArrayList;
import java.util.List;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@ControllerAdvice
public class ApiExceptionHandler extends ResponseEntityExceptionHandler {
  
    private MessageSource messageSource;

    @Override
    @Nullable
   protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
           HttpHeaders headers, HttpStatusCode status, WebRequest request) {
            List<Problema.Campo> campos  = new ArrayList<>(); 
            
            for(ObjectError error: ex.getBindingResult().getAllErrors()){
                String nome = ((FieldError) error).getField();
                String mensagem = messageSource.getMessage(error, LocaleContextHolder.getLocale());
                campos.add(new Problema.Campo(nome, mensagem));
            }
            Problema problema = new Problema();
            problema.setStatus(status.value());
            problema.setTitulo("Campos invalidos");
            problema.setCampo(campos);
     
       return handleExceptionInternal(ex,problema, headers, status, request);
   }
}


// @Override
// @Nullable
// protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
//         HttpHeaders headers, HttpStatusCode status, WebRequest request) {
//             List<Problema.Campo> campos = new ArrayList<>();

//             for(ObjectError error: ex.getBindingResult().getAllErrors() ){
//                 String nome = ((FieldError) error).getField();
//                 String mensagem = messageSource.getMessage(error, LocaleContextHolder.getLocale());

//                 campos.add(new Problema.Campo(nome, mensagem));
//             }

//             Problema error = new Problema();
//             error.setStatus(status.value());
//             error.setTitulo("Campos invalidos");
//             error.setCampo(campos);

//    return handleExceptionInternal(ex, error, headers, status, request);
// }