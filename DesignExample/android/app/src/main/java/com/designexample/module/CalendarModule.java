package com.designexample.module;

import android.content.Context;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;

    public CalendarModule(ReactApplicationContext context) {
        super(context);
        this.context = context;
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void calendar(String name) {
        Context context = getReactApplicationContext();
        Toast.makeText(context, name, Toast.LENGTH_LONG).show();
    }
}
