//
//  CalendarModuleBridge.m
//  DesignExample
//
//  Created by gigas on 2021/07/21.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(CalendarModule, NSObject)
  RCT_EXTERN_METHOD(calendar:(NSString *)name)
@end
