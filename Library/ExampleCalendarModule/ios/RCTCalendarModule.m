//
//  RCTCalendarModule.m
//  ExampleCalendarModule
//
//  Created by gigas on 2021/09/01.
//

#import "RCTCalendarModule.h"

@implementation RCTCalendarModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent: (NSString *) name
                                      location: (NSString *) location ) {
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
