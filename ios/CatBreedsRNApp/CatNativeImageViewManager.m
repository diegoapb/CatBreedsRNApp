#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(CatNativeImageViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(source, NSDictionary)
RCT_EXPORT_VIEW_PROPERTY(resizeMode, NSString)

@end
