// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CrowlabsEtaEscrow from './crowlabs.eta.escrow'
import CrowlabsEtaMarket from './crowlabs.eta.market'
import CrowlabsEtaWhitelist from './crowlabs.eta.whitelist'


export default { 
  CrowlabsEtaEscrow: load(CrowlabsEtaEscrow, 'crowlabs.eta.escrow'),
  CrowlabsEtaMarket: load(CrowlabsEtaMarket, 'crowlabs.eta.market'),
  CrowlabsEtaWhitelist: load(CrowlabsEtaWhitelist, 'crowlabs.eta.whitelist'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}