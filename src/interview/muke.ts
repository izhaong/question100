/*
 * @Author: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Date: 2022-09-15 18:53:46
 * @LastEditTime: 2022-09-16 09:37:14
 * @LastEditors: 仲灏<izhaong@outlook.com>🌶🌶🌶
 * @Description: 根据规则，清理⻚⾯中隐藏或锁定图层（Layer）;
 * @FilePath: /question100/src/interview/muke.ts
 */

/* eslint-disable */
// ************************* 附⼆：数据结构声明 ***************************
interface IMenu {
    checked: boolean;
    text: string;
    id: string; // 唯⼀
}
interface IClearLayerOption {
    menuList: IMenu[];
    pageType: EPageType;
}
interface IMessage {
    type: string;
    data: IClearLayerOption;
}
enum EPageType {
    currentPage,
    allPage,
}
enum EMessage {
    text,
    success,
    fail,
}

// ******************附⼀：API ⽰例清单，仅包含⼀⼩部分代码 *******************
declare global {
    const mockplus: PluginAPI;
     readonly ui: UIAPI;
     interface PluginAPI {
        currentPage: Page; // 当前⻚⾯
        readonly root: Document; // 当前⽂档
        readonly ui: UIAPI;
        findLayerById(id: string): Layer | null; // 查找图层 ***
        commitUndo():void; // 提交数据
    }
    interface UIAPI {
        onmessage(message: any): void; // 接收消息
        postMessage(pluginMessage: any, options?: UIPostMessageOptions); // 发送消息
    }
    interface UIPostMessageOptions {}
    interface Document {
        readonly appID: string;
        readonly pages: ReadonlyArray<Page>; // 项⽬中的所有⻚⾯
    }

    // 图层结构
    interface Layer {
        readonly id: string;
        removed: boolean;
        hidden: boolean; // 是否隐藏
    }
}

// import { EPageType, EMessage } from '../utils';
import i18n from '../i18n';
mockplus.ui.onmessage = (msg?: IMessage) => {
    if (msg?.type === 'clear-layer') {
        new ClearLayer(msg.data);
    }
};


class ClearLayer {
    pages: Page[];
    selectedMenu: string[];
    deleteLayerIds: string[] = [];
    constructor({ menuList, pageType }: IClearLayerOption) {
        this.selectedMenu = menuList
            .filter((option: IMenu) => option.checked)
            .map((option: IMenu) => option.text);
        this.pages = this.setPages(pageType);
        this.clearLayerTree();
    }
    private setPages(pageType: EPageType): Page[] {
        const pages = [];
        if (pageType === EPageType.currentPage) {
            pages.push(mockplus.currentPage);
        } else if (pageType == EPageType.allPage) {
            pages.push(...mockplus.root.pages);
        }
        return pages;
    }
    private clearLayerTree(): void {
        this.pages.forEach((page: Page) => {
            this.mapLayerTree(page.layers);
        });
        try {
            if (!this.deleteLayerIds.length) {
                this.postMessage(i18n('clear.noClearLayerYet'), EMessage.text);
                return;
            }
            this.deleteLayerIds.forEach((id: string) => {
                mockplus.findLayerById(id).remove();
            });
            this.deleteLayerIds = [];
        } catch (err) {
            this.postMessage(i18n('clear.fail'), EMessage.fail);
            console.error('err', err);
        }
        this.postMessage(i18n('clear.success'), EMessage.success);
        mockplus.commitUndo();
    }
    private mapLayerTree(layers: Layer[]): void {
        layers.forEach((layer: Layer) => {
            if (layer.layers?.length > 0) {
                this.mapLayerTree(layer.layers);
            }
            this.handleLayers(layer);
        });
    }
    private handleLayers(layer: Layer): void {
        if (this.selectedMenu.includes(i18n('options.hidden')) && layer.hidden) {
            this.deleteLayerIds.push(layer.id);
        }
        if (this.selectedMenu.includes(i18n('options.locked')) && layer.locked) {
            this.deleteLayerIds.push(layer.id);
        }
    }
    private postMessage(text: string, type: EMessage): void {
        /* 省略代码*/
    }
}
/* eslint-disable */
